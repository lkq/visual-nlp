package com.github.lkq.visualnlp.opennlp

import opennlp.tools.tokenize.TokenizerME
import opennlp.tools.tokenize.TokenizerModel

class Tokenizer(modelFile: String) {

    private val tokenizer: opennlp.tools.tokenize.Tokenizer

    init {
        val modelStream = this.javaClass.getResourceAsStream(modelFile)
        val tokenizerModel = TokenizerModel(modelStream)
        this.tokenizer = TokenizerME(tokenizerModel)
    }

    fun tokens(text: String): Array<String> {
        return tokenizer.tokenize(text)
    }
}