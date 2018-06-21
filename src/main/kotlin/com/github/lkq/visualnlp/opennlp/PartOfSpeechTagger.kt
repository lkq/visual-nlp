package com.github.lkq.visualnlp.opennlp

import opennlp.tools.postag.POSModel
import opennlp.tools.postag.POSTagger
import opennlp.tools.postag.POSTaggerME

class PartOfSpeechTagger(modelFile: String) {

    private val tagger: POSTagger

    init {
        val modelStream = this.javaClass.getResourceAsStream(modelFile)
        val posModel = POSModel(modelStream)
        this.tagger = POSTaggerME(posModel)

        modelStream.close()
    }

    fun tags(tokens: Array<String>): Array<String> {
        return tagger.tag(tokens)
    }
}