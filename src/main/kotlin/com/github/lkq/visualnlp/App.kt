package com.github.lkq.visualnlp
import com.github.lkq.visualnlp.opennlp.PartOfSpeechTagger
import com.github.lkq.visualnlp.opennlp.Tokenizer
import spark.Request
import spark.Response
import spark.Spark.*

fun main(args: Array<String>) {

    val tagger = PartOfSpeechTagger("/models/en-pos-maxent.bin")
    val tokenizer = Tokenizer("/models/en-token.bin")

    port(2001)
    staticFileLocation("/ui")
    get("/hello", { request: Request, response: Response ->
        val name = request.queryParams("name")
        "Hello $name"
    })

    get("/pos", { request: Request, response: Response ->
        val text = request.queryParams("text")

        val tokens = tokenizer.tokens(text)
        val tags = tagger.tags(tokens)

        tokens.joinToString() + ", " + tags.joinToString()

    })

}