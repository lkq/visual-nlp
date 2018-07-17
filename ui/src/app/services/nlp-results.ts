
export class PosToken {

  token: String;
  tag: String;
  tagName: String;

  constructor() { }
}

export class NlpResults {
  partOfSpeech: PosToken[];

  constructor() {}
}
