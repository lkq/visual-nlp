#!/usr/bin/env bash

# scripts to download the required model files for OpenNLP

mkdir models

wget -O models/en-token.bin http://opennlp.sourceforge.net/models-1.5/en-token.bin
wget -O models/en-pos-maxent.bin http://opennlp.sourceforge.net/models-1.5/en-pos-maxent.bin
wget -O models/en-sent.bin http://opennlp.sourceforge.net/models-1.5/en-sent.bin
wget -O models/en-parser-chunking.bin http://opennlp.sourceforge.net/models-1.5/en-parser-chunking.bin
