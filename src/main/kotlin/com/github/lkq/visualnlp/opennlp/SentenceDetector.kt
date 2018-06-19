package com.github.lkq.visualnlp.opennlp

import opennlp.tools.sentdetect.SentenceDetectorME
import opennlp.tools.sentdetect.SentenceModel

class SentenceDetector(modelFile: String) {

    private val sentenceDetector: opennlp.tools.sentdetect.SentenceDetector

    init {

        val modelStream = this.javaClass.getResourceAsStream(modelFile)
        val model = SentenceModel(modelStream)
        sentenceDetector = SentenceDetectorME(model)
    }

    fun getSentences(text: String): Array<String> {
        return sentenceDetector.sentDetect(text)
    }
}