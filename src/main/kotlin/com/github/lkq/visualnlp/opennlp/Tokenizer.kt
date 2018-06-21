package com.github.lkq.visualnlp.opennlp

import opennlp.tools.tokenize.TokenizerME
import opennlp.tools.tokenize.TokenizerModel
import opennlp.tools.util.Span

class Tokenizer(modelFile: String) {

    private val tokenizer: opennlp.tools.tokenize.Tokenizer

    init {
        val modelStream = this.javaClass.getResourceAsStream(modelFile)
        val tokenizerModel = TokenizerModel(modelStream)
        this.tokenizer = TokenizerME(tokenizerModel)

        modelStream.close()
    }

    fun tokenize(text: String): Array<String> {
        return tokenizer.tokenize(text)
    }

    fun tokenizePos(text: String): Array<Span> {
        return tokenizer.tokenizePos(text)
    }
}