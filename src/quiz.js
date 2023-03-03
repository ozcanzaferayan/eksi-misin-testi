export const quiz = {
  quizTitle: "Ne kadar eksisin?",
  quizSynopsis: "Eksi olup olmadığınızı test edin",
  nrOfQuestions: "10",
  appLocale: {
    landingHeaderText: "<questionLength> Soru",
    question: "Soru",
    startQuizBtn: "Teste başla",
    resultFilterAll: "Hepsi",
    resultFilterCorrect: "Doğru",
    resultFilterIncorrect: "Yanlış",
    prevQuestionBtn: "Önceki soru",
    nextQuestionBtn: "Sonraki soru",
    resultPageHeaderText: "Testi tamamladınız. Sıfır değil eksisiniz",
    resultPagePoint: "You scored <correctPoints> out of <totalPoints>.",
    singleSelectionTagText: "Tek seçim",
    multipleSelectionTagText: "Çoklu seçim",
    pickNumberOfSelection: "<numberOfSelection> adet seçiniz",
  },
  questions: [
    {
      question: "Maaş beklentiniz ne kadar?",
      questionType: "text",
      questionPic:
        "https://images.unsplash.com/photo-1579240637470-e029acf584a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
      answerSelectionType: "single",
      answers: ["A) 3.000", "B) 5.000", "C) 10.000", "D) 15.000"],
      correctAnswer: "4",
      point: "10",
    },
    {
      question: "Hangi hakları talep ediyorsunuz?",
      questionType: "text",
      questionPic:
        "https://images.unsplash.com/photo-1591522811280-a8759970b03f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
      answerSelectionType: "multiple",
      answers: [
        "A) Ozel sağlık sigortası",
        "B) Yemek hakkı",
        "C) Uzaktan çalışma",
        "D) Macbook",
      ],
      correctAnswer: [1, 2, 3, 4],
      point: "10",
    },
    {
      question: "Tamam bunlar OK. Başka ne istersin?",
      questionType: "text",
      questionPic:
        "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&&w=400&h=300&q=80",
      answerSelectionType: "single",
      answers: [
        "A) Hiçbir şey bilmiyorum birkaç tane kursa gitmem lazım",
        "B) Her şeyi biliyorum. Başka bir şeye gerek yok",
      ],
      correctAnswer: "1",
      point: "10",
    },
    {
      question: "Başka ne lazım? Kamera şakası mısınız?",
      questionType: "text",
      answerSelectionType: "single",
      questionPic: "kamera_sakasi.jpg",
      answers: [
        "A) Evet, kamera şakası. Biraz daha para verin",
        "B) Hayır teşekkürler",
        "C) Hepsi",
      ],
      correctAnswer: "3",
      point: "10",
    },
    {
      question:
        "Tamam 15 bin lira çok büyük bi rakam değil ama eksi bir elemana da... Neyse. Hayatınız boyunca oyun oynadınız mı?",
      questionType: "text",
      answerSelectionType: "single",
      questionPic: "oyun.png",
      answers: [
        "A) Evet sürekli oynarım",
        "B) Hayır oyun oynayacağıma open source'a katkı yaparım",
      ],
      correctAnswer: "1",
      point: "10",
    },
    {
      question: "Counter Strike'ta hangi level'siniz?",
      questionType: "text",
      answerSelectionType: "single",
      questionPic: "cs.jpg",
      answers: ["A) Silver", "B) Gold", "C) Elite", "D) Lvbel C5"],
      correctAnswer: "4",
      point: "10",
    },
    {
      question:
        "Ben iş dünyasında bunu napıcam hacı? Peki okul ödevlerinizi yapar mısınız?",
      questionType: "text",
      answerSelectionType: "single",
      questionPic: "odev.png",
      answers: ["A) Yapmam", "B) Kendim yaparım", "C) Başkasına yaptırırım"],
      correctAnswer: "3",
      point: "10",
    },
    {
      question:
        "Bu özgüven nereden geliyor? Yazılımcı olarak nasıl başvuruyorsunuz o zaman?",
      questionType: "text",
      answerSelectionType: "single",
      questionPic: "ise_al_beni.png",
      answers: [
        "A) Ozel üniversiteden bilgisayar Müh diplomam var. Diplomama güveniyorum",
        "B) Diplomam yok ama iyi kod yazarım",
        "C) Açım, beni işe alın",
      ],
      correctAnswer: "1",
      point: "10",
    },
    {
      question: "Peki CV'nizdeki yeterlilikler nelerdir",
      questionType: "text",
      answerSelectionType: "multiple",
      questionPic: "babyshark.png",
      answers: [
        "A) C# (orta)",
        "B) Android/Java (iyi)",
        "C) Ingilizce (iyi)",
        "D) Baby Shark (başlangıç)",
      ],
      correctAnswer: [1, 2, 3],
      point: "10",
    },
    {
      question: "Otur Java/Android, C# yaz desem naparsın?",
      questionType: "text",
      answerSelectionType: "single",
      questionPic: "oduncu.jpg",
      answers: [
        "A) Onlar için bi kursa gitmem lazım",
        "B) Efendim, tamam, yaparım",
      ],
      correctAnswer: "1",
      point: "10",
    },
  ],
};
