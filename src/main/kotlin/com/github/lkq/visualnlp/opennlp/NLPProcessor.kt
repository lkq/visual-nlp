package com.github.lkq.visualnlp.opennlp

import com.google.gson.JsonArray
import com.google.gson.JsonObject
import java.io.File

class NLPProcessor {
    val tagger = PartOfSpeechTagger("/models/en-pos-maxent.bin")
    val tokenizer = Tokenizer("/models/en-token.bin")
    val sentDetector = SentenceDetector("/models/en-sent.bin")
    val parser = Parser("/models/en-parser-chunking.bin", tokenizer)

    fun process(text: String): String {
        val result = JsonObject()
        result.add("partOfSpeech", partOfSpeech(text))
        result.addProperty("parse", parse(text))
        return result.toString()
    }

    private fun parse(text: String): String {
        val parse = parser.parse(text)
        val result = StringBuffer()
        parse.show(result)
        return result.toString()
    }

    private fun partOfSpeech(text: String): JsonArray {
        val pos = JsonArray()

        val sentences = sentDetector.getSentences(text)
        for (sentence in sentences) {
            val tokens = tokenizer.tokenize(sentence)
            val tags = tagger.tags(tokens)

            val tagNames = TreebankNames(File(ClassLoader.getSystemClassLoader().getResource("penn-english-treebank.csv").file))
            for (i in tokens.indices) {
                val elm = JsonObject()
                elm.addProperty("token", tokens[i])
                elm.addProperty("tag", tags[i])
                elm.addProperty("tagName", tagNames.get(tags[i]))
                pos.add(elm)
            }
        }
        return pos
    }
}