
export class PosToken {

  token: string;
  tag: string;
  tagName: string;

  constructor() { }
}

export class NlpResults {
  partOfSpeech: PosToken[];

  constructor() {}
}
