const grafico = document.getElementById("myChart").getContext("2dc");
var meugrafico = new Chart(grafico,{
    type:"pie",
    date: {
     labels: [
        "Instagram",
        "WhatsApp",
        "Facebook",
        "WeChat",
        "TikTok",
        "DouYin",
        "Twitter",
        "Telegram",
        "FB Messenger",
        "LINE"

     ]

}

}


)