const quotes = [
    {
        quote: "최고 높이의 산을 오를 때에도 한 번 한 걸음에서 시작한다. ",
        author: "바바라 월터스",
    },
    {
        quote: "우리가 정복하는 것은 산이 아니라 우리 자신이다.",
        author: "에드먼드 힐러리",
    },
    {
        quote: "계곡에서는 안 보일지라도, 모든 산에는 길이 있다. ",
        author: "시어도어 로스케",
    },
    {
        quote: "나는 국가의 위신을 위해서가 아니라 나 자신의 즐거움을 위하여 등반할 뿐이다.",
        author: "주스트 제르바수티",
    },
    {
        quote: "문제는 고도(Altitude)가 아니라 태도(Attitude)다. 산행의 본질은 정상을 오르는 데 있는 것이 아니라 고난과 싸우고 그것을 극복하는 데 있다.",
        author: "앨버트 머메리",
    },
    {
        quote: "등산은 인내의 예술이다.",
        author: "보이테크 쿠르티카",
    },
    {
        quote: "굳이 정상에 오를 필요는 없다",
        author: "보이테크 쿠르티카",
    },
    {
        quote: "등산은 길이 끝나는 데서부터 시작한다. ",
        author: "알랑 드 샤뗄리우스",
    },
    {
        quote: "등산가는 산의 법칙에 따라 행동할 줄 아는 사람이며 언제나 배워야 한다고 느끼는 사람이다.",
        author: "헤르만 후버",
    },
    {
        quote: "그것이 거기 있기에",
        author: "조지 말로리",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;