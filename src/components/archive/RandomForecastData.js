const relevantDate = new Date(Date.now());
const expiredDate = new Date("2019-02-16T10:18:29.328Z");

const mockForecastData = [
  {
    id: "34298392-1ff3-0fb0-573f-72f44e15",
    userId: "efda0939-3101-f362-83fd-f3936fa3",
    username: "stockguru",
    position: "long",
    targetPrice: 380,
    timeFrame: "1 year",
    title: "Apple: The New iPhone Opportunity",
    rationale:
      "One of the reasons that technology giant Apple (AAPL) has seen its shares soar to new all-time highs recently is the expected iPhone supercycle coming this year. With the company getting ready to launch new 5G compatible phones, investors are betting that iPhone upgrade rates will soar, leading to new revenue and profit records.",
    createdAt: relevantDate
  },
  {
    id: "6048bd45-c7dc-0edf-a14b-c3daf10b",
    userId: "0aaa648b-5d1d-bfc8-af4b-b1597a95",
    username: "stockshorter",
    position: "short",
    targetPrice: 300,
    timeFrame: "3 months",
    title: "Apple Supplier Rumor: An Awesome Short Entry Point",
    rationale: `One analyst stated that 2019-nCoV will only have a 10% impact on iPhone shipments. Again, I find analyst comments hard to believe, as their main constituents are their own clients. Public companies are a bit more trustworthy, as they must act to benefit investors.

    Case in point, Sony (NYSE:SNE), a supplier to Apple, has given a much more dire warning. The word Sony's CFO used in regard to the impact of 2019-nCoV on its smartphone image sensor supply was "enormous," which is not a word that describes "10%." Sony holds 70% of the market share in this category.`,
    createdAt: expiredDate
  }
];

export default mockForecastData;
