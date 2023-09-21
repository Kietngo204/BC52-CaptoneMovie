import fetcher from "./fetcher";

export async function getMovieShowTimes(movieId) {
  try {
    const response = await fetcher.get(`QuanLyRap/LayThongTinLichCHieuPhim`, {
      params: {
        MaPhim: movieId,
      },
    });
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}
