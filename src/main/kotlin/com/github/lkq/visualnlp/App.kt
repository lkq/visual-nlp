package com.github.lkq.visualnlp
import com.github.lkq.visualnlp.opennlp.*
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
    val parser = Parser("/models/en-parser-chunking.bin", tokenizer)

    port(2001)
    staticFileLocation("/ui")
    get("/hello", { request: Request, response: Response ->
        val name = request.queryParams("name")
        "Hello $name"
    })

    get("/parse", {request: Request, response: Response ->
        val text = request.queryParams("text")
        val parse = parser.parse(text)
        val result = StringBuffer()
        parse.show(result)
        result.toString()
    })

    get("/pos", { request: Request, response: Response ->
        val text = request.queryParams("text")

        val sentenceJson = JsonObject()

        val sentences = sentDetector.getSentences(text)
        for (sentence in sentences) {
            val tokens = tokenizer.tokenize(sentence)
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