package com.github.lkq.visualnlp
import com.github.lkq.visualnlp.opennlp.PartOfSpeechTagger
import com.github.lkq.visualnlp.opennlp.SentenceDetector
import com.github.lkq.visualnlp.opennlp.Tokenizer
import com.github.lkq.visualnlp.opennlp.TreebankNames
import com.google.gson.JsonArray
import com.google.gson.JsonObject
import spark.Request
import spark.Response
import spark.Spark.*
import java.io.File

fun main(args: Array<String>) {

    val tagger = PartOfSpeechTagger("/models/en-pos-maxent.bin")
    val tokenizer = Tokenizer("/models/en-token.bin")
    val sentDetector = SentenceDetector("/models/en-sent.bin")

    port(2001)
    staticFileLocation("/ui")
    get("/hello", { request: Request, response: Response ->
        val name = request.queryParams("name")
        "Hello $name"
    })

    get("/pos", { request: Request, response: Response ->
        val text = request.queryParams("text")

        val sentenceJson = JsonObject()

        val sentences = sentDetector.getSentences(text)
        for (sentence in sentences) {
            val tokens = tokenizer.tokens(sentence)
            val tags = tagger.tags(tokens)

            val json = JsonArray()
            val tagNames = TreebankNames(File(ClassLoader.getSystemClassLoader().getResource("penn-english-treebank.csv").file))
            for (i in tokens.indices) {
                val elm = JsonObject()
                elm.addProperty("token", tokens[i])
                elm.addProperty("tag", tags[i])
                elm.addProperty("tagName", tagNames.get(tags[i]))
                json.add(elm)
            }

            sentenceJson.add(sentence, json)
        }
        sentenceJson.toString()
    })

}