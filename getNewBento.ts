const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Rohan%20Ghosh&g=Rohantech231&x=iamrohan3000&l=rohan-ghosh-a214b9209&i=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FD4D03AQGZxj5NIlZ3Kw%2Fprofile-displayphoto-shrink_800_800%2FB4DZPdxOZBHUAg-%2F0%2F1734592489624%3Fe%3D1750896000%26v%3Dbeta%26t%3D98LX0hvi2oKZbiKqR1OtMt1kyhH3bW1HQeGMJ5_tVcQ&p=rgfolio.vercel.app&z=9317d";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
