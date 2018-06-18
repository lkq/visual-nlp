package com.github.lkq.visualnlp.opennlp

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertAll
import java.io.File

internal class TreebankNamesTest {

    private val treebankNames = TreebankNames(File(ClassLoader.getSystemClassLoader().getResource("penn-english-treebank.csv").file))
    @Test
    internal fun name() {
        assertAll("can get treebank names", {
            assert("Noun, singular or mass" == treebankNames.get("NN"), {"actual " + treebankNames.get("NN")})
        })
    }
}