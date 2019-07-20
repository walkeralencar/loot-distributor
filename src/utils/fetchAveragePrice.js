import fetch from 'node-fetch'

const fetchAveragePrice = async (itemID, marketSource) => {
  const apiUrl = `https://www.albion-online-data.com/api/v1/stats/Charts/${itemID}?locations=${marketSource}`
  const result = await fetch(apiUrl).then(res => res.json())
  let averagePrice = 0

  if (!result.length) {
    return {
      averagePrice
    }
  }

  const { prices_min } = result[0].data
  averagePrice = prices_min[prices_min.length - 1]

  return averagePrice
}

export default fetchAveragePrice
