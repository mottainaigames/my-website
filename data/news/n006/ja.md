<style>
#newsDetailTitle {
  font-size: clamp(26px, 3vw, 36px);
  line-height: 1.45;
  padding-left: 16px;
}
#newsDetailContent {
  padding: 0;
  border: 0;
  background: transparent;
}
#newsDetailContent .rule-faq {
  line-height: 1.9;
  overflow-wrap: anywhere;
}
#newsDetailContent .rule-faq-intro {
  margin: 8px 0 28px;
  color: var(--text, #f3f4f6);
}
#newsDetailContent .rule-faq-intro p {
  margin: 0 0 8px;
}
#newsDetailContent .rule-faq-item {
  margin: 0 0 22px;
  border: 1px solid rgba(125, 211, 252, 0.22);
  border-radius: 14px;
  overflow: hidden;
  background: rgba(11, 12, 16, 0.34);
}
#newsDetailContent .rule-faq-question {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin: 0;
  padding: 22px 24px;
  background: rgba(125, 211, 252, 0.08);
  border-bottom: 1px solid rgba(125, 211, 252, 0.16);
  color: var(--text, #f3f4f6);
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 700;
  line-height: 1.65;
}
#newsDetailContent .rule-faq-number {
  flex: 0 0 46px;
  padding: 3px 0;
  border-radius: 8px;
  background: var(--accent, #7dd3fc);
  color: #0b1720;
  font-size: 18px;
  line-height: 1.65;
  text-align: center;
}
#newsDetailContent .rule-faq-question-text {
  min-width: 0;
}
#newsDetailContent .rule-faq-answer {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 16px;
  padding: 22px 24px 24px;
}
#newsDetailContent .rule-faq-answer-label {
  color: var(--accent, #7dd3fc);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;
}
#newsDetailContent .rule-faq-answer p {
  margin: 0 0 12px;
}
#newsDetailContent .rule-faq-answer p:last-child {
  margin-bottom: 0;
}
#newsDetailContent .rule-faq-answer strong {
  color: #fff;
  font-weight: 700;
}
#newsDetailContent .rule-faq-example {
  padding: 12px 16px;
  border-left: 3px solid var(--accent, #7dd3fc);
  background: rgba(125, 211, 252, 0.06);
  border-radius: 0 8px 8px 0;
}
#newsDetailContent .rule-faq-defense {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(125, 211, 252, 0.18);
}
@media (max-width: 600px) {
  #newsDetailTitle {
    font-size: 26px;
    padding-left: 12px;
  }
  #newsDetailContent .rule-faq-intro {
    margin-bottom: 22px;
  }
  #newsDetailContent .rule-faq-item {
    margin-bottom: 18px;
    border-radius: 12px;
  }
  #newsDetailContent .rule-faq-question {
    gap: 12px;
    padding: 18px 16px;
    font-size: 20px;
    line-height: 1.65;
  }
  #newsDetailContent .rule-faq-number {
    flex-basis: 38px;
    font-size: 16px;
  }
  #newsDetailContent .rule-faq-answer {
    grid-template-columns: 24px minmax(0, 1fr);
    gap: 10px;
    padding: 18px 16px 20px;
  }
  #newsDetailContent .rule-faq-answer-label {
    font-size: 18px;
  }
  #newsDetailContent .rule-faq-example {
    padding: 10px 12px;
  }
}
</style>

<div class="rule-faq">
  <div class="rule-faq-intro">
    <p>『情報漏洩』をご愛顧いただき、誠にありがとうございます。</p>
    <p>お問い合わせいただいた内容をもとに、ルールに関するQ&amp;Aをまとめました。プレイの際にご確認ください。</p>
  </div>

  <section class="rule-faq-item" aria-labelledby="rule-faq-q1">
    <h3 class="rule-faq-question" id="rule-faq-q1"><span class="rule-faq-number">Q1．</span><span class="rule-faq-question-text">ゲームの準備で配られたカードは公開しますか？</span></h3>
    <div class="rule-faq-answer">
      <span class="rule-faq-answer-label">A．</span>
      <div>
        <p>山札から引く2枚は<strong>「手札」となり、ほかのプレイヤーには公開しません。</strong></p>
        <p>自社盤面の緑の〈ファイアウォール〉と、情報カード4枚は<strong>表向きで配置します。</strong></p>
      </div>
    </div>
  </section>

  <section class="rule-faq-item" aria-labelledby="rule-faq-q2">
    <h3 class="rule-faq-question" id="rule-faq-q2"><span class="rule-faq-number">Q2．</span><span class="rule-faq-question-text">青・赤のカードは、自社盤面に複数枚配置できますか？</span></h3>
    <div class="rule-faq-answer">
      <span class="rule-faq-answer-label">A．</span>
      <div>
        <p>はい。同名カードも含め、<strong>複数枚配置できます。</strong></p>
        <p><strong>紫カードのみ、自社盤面に配置できるのは1枚までです。</strong>新しい紫カードを配置する場合、それまでの紫カードを捨札にします。</p>
        <p>なお、通常の手番で手札から配置するカードは1枚です。</p>
      </div>
    </div>
  </section>

  <section class="rule-faq-item" aria-labelledby="rule-faq-q3">
    <h3 class="rule-faq-question" id="rule-faq-q3"><span class="rule-faq-number">Q3．</span><span class="rule-faq-question-text">サイバー攻撃は、サイコロを振ったプレイヤーも受けますか？</span></h3>
    <div class="rule-faq-answer">
      <span class="rule-faq-answer-label">A．</span>
      <div>
        <p>はい。<strong>手番プレイヤーを含む全員</strong>が、サイコロ2個の合計値に対応する自社盤面のカード効果を解決します。</p>
        <p>その後、サイバー攻撃を防げなかった会社は、情報カード1枚を捨札にします。</p>
      </div>
    </div>
  </section>

  <section class="rule-faq-item" aria-labelledby="rule-faq-q4">
    <h3 class="rule-faq-question" id="rule-faq-q4"><span class="rule-faq-number">Q4．</span><span class="rule-faq-question-text">公開盤面にサイバー攻撃アイコンのあるカードが出た場合、攻撃の処理後は捨札にしますか？</span></h3>
    <div class="rule-faq-answer">
      <span class="rule-faq-answer-label">A．</span>
      <div>
        <p>サイバー攻撃を行ったことを理由に捨札にはせず、<strong>そのまま公開盤面に残します。</strong></p>
        <p>また、アイコンのあるカードが残っているだけでは、再びサイバー攻撃は発生しません。カードの補充で、<strong>新たにアイコンのあるカードが公開されたとき</strong>に発生します。</p>
      </div>
    </div>
  </section>

  <section class="rule-faq-item" aria-labelledby="rule-faq-q5">
    <h3 class="rule-faq-question" id="rule-faq-q5"><span class="rule-faq-number">Q5．</span><span class="rule-faq-question-text">防御カードは、いつ効果を発揮しますか？ また、防御後は捨札にしますか？</span></h3>
    <div class="rule-faq-answer">
      <span class="rule-faq-answer-label">A．</span>
      <div>
        <p>自社盤面にあるカードの上部の数字と、<strong>サイコロ2個の合計値が一致したとき</strong>に効果を発揮します。数字が範囲で書かれている場合、その範囲に含まれていれば発動します。</p>
        <p class="rule-faq-example">例えば、合計が10の場合は「10」「9〜10」「10〜12」などの防御カードが対象です。</p>
        <div class="rule-faq-defense">
          <p>〈ファイアウォール〉〈暗号化〉は、<strong>防御後も自社盤面に残ります。</strong></p>
          <p>〈ウィルス対策ソフト〉は、<strong>そのカードを捨札にした場合</strong>に防御効果を発揮します。</p>
        </div>
      </div>
    </div>
  </section>
</div>
