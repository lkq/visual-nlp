package com.github.lkq.visualnlp.opennlp

import mu.NamedKLogging
import org.apache.commons.csv.CSVFormat
import java.io.File
import java.io.FileReader

class TreebankNames(mappingFile: File) {

    companion object : NamedKLogging(TreebankNames::class.java.name)

    private val mappings: Map<String, String>

    init {
        logger.info("loading treebank name mapping from {}", mappingFile)
        val records = CSVFormat.EXCEL.parse(FileReader(mappingFile))
        val mappings = HashMap<String, String>()
        for (record in records) {
            mappings[record.get(0)] = record.get(1)
        }
        this.mappings = mappings
        logger.info("loaded treebank name mapping: {}", mappings)
    }

    fun get(annotation: String): String? {
        return mappings[annotation]
    }
}