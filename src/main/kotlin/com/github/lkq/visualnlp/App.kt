package com.github.lkq.visualnlp
import com.github.lkq.visualnlp.opennlp.NLPProcessor
import mu.NamedKLogging
import spark.Request
import spark.Response
import spark.Spark.*

fun main(args: Array<String>) {
    val logger = NamedKLogging("[main]").logger

    val processor = NLPProcessor()

    port(2001)
    staticFileLocation("/ui")

    post("/api/nlp", {request: Request, response: Response ->
        val result = processor.process(request.body())
        logger.info("result: $result")
        return@post result
    })
}