package com.github.lkq.visualnlp.opennlp

import opennlp.tools.parser.AbstractBottomUpParser
import opennlp.tools.parser.Parse
import opennlp.tools.parser.ParserFactory
import opennlp.tools.parser.ParserModel
import opennlp.tools.util.Span

class Parser(modelFile: String, tokenizer: Tokenizer) {
    private val parser: opennlp.tools.parser.Parser
    private val tokenizer: Tokenizer

    init {
        val modelStream = this.javaClass.getResourceAsStream(modelFile)
        val model = ParserModel(modelStream)
        this.parser = ParserFactory.create(model)

        this.tokenizer = tokenizer

        modelStream.close()
    }

    fun parse(text: String): Parse {
        val parse = Parse(text, Span(0, text.length), AbstractBottomUpParser.INC_NODE, 1.0, 0)
        val spans = tokenizer.tokenizePos(text)

        for (i in spans.indices) {
            parse.insert(Parse(text, spans[i], AbstractBottomUpParser.TOK_NODE, 0.0, i))
        }

        return parser.parse(parse)
    }
}