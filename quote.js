let quotesection = document.getElementById("quotesection");
let author = document.getElementById("author");
let length = 12;
function generate(){
    let quote = {
        "Tedi" : "ጥለሽኝ  ስትሄጂ <br>ጩህት እሪ   ታዬን <br>እንደምን ላምቀው? <br>አስጭሆ አይደለም ወይ? <br>ሰይጣን የሚለቀው? ", "Tedi" : 'ጠልፎኝ ስንገዳገድ <br>"" ጠላትህ ይደፋ""" <br> ብትል አዘንኩ ከፋኝ <br>እኔኑ ልደፋኝ?' , "Tedi" : "ሴትን የማማለል ጥበብ <br><br> ነገረ 'ቧልተኝነት' <br><br>ይሜ👍", 
        "Beki" : " 'ሀ' ወደ እግዜር ቀና  'በ' ወደ ምድሪቱ<br>ስጋ እና ነፍስ ያለው  'ሰ' ወ ደ ሁለቱ " , "Tedi"  : "እፎይ ቀለልኩ<br> ተዋረድኩ<br>ሰው አከልኩ፡፡<br>እፎይ ቀለለኝ <br>መቆለል ከለከለኝ<br>ከራሴ ጋር ተነጋገርኩ፡፡<br>ከምኞት ጋር ወረድኩ፡፡<br>እንደጉረኛ መለአክ አልወድቅ <br>እንደሙት በድን አልከብድም<br>እፎይ ቀለልኩ<br>ተዋረድኩ<br>እኔን አከልኩ፡፡"

    };
    var autores = Object.keys(quote);
    var autore = autores [Math.floor(Math.random() * autores.length)];
    var quotes = quote[autore];
    quotesection.innerHTML = quotes;
    author.innerHTML = autore;
}