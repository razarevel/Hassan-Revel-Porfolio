export default function BlogsFirst() {
  const para = `Picture this—London, a city rich in history and characterized by its ever-changing weather, now with a cutting-edge forecasting tool at your fingertips. The ability to predict weather patterns accurately has always intrigued me, leading to this project. Using a dataset from Kaggle, featuring historical weather data from 1979 to 2021 recorded near Heathrow, I set out to build an AI-powered model. By focusing on maximum temperature, I split the data, preprocessed it, and trained a BiLSTM model over 500 epochs. The results? An impressive RMSE of 0.07 and a MAPE of 12.02%. This tool not only demonstrates the potential of AI in meteorology but also satisfies a deep curiosity.`;

  return (
    <section id="blogsFirst">
      <div className="flex flex-col lg:flex-row px-[16px] sm:px-[30px] space-y-[35px] lg:px-[5.125vw] lg:space-x-[5vw]  my-[5.818vw]">
        <div className="lg:w-[55.18%]  overflow-hidden">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQHjrQWrhgdDAg/article-cover_image-shrink_720_1280/0/1715880568432?e=1721260800&v=beta&t=fCcHpaCxtEOzO81ILNuh3L0jKRFFJlkqgXduoldtxjQ"
              alt=""
              className="duration-300 hover:scale-105 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="space-y-5 lg:w-[44.82%]">
          <div>
            {/* date */}
            <p className="font-SemiBold">2024</p>
            {/* heading */}
            <h1 className="text-[2em] font-Bold text-darkBlue">
              London Weather Forecast
            </h1>
          </div>
          <p className="text-[16px] leading-[2]">{para}</p>

          {/* para */}
        </div>
      </div>
    </section>
  );
}
