import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { css } from '@emotion/react'

function Carousel({ images }: { images: string[] }) {
  return (
    <div>
      <Swiper css={containerStyles} spaceBetween={8}>
        {images.map((imgUrl, idx) => (
          <SwiperSlide key={imgUrl}>
            <img
              src={imgUrl}
              alt={`${idx + 1}번째 호텔의 이미지`}
              css={imageStyles}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const containerStyles = css`
  padding: 0 24px;
  height: 300px;
`

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`
export default Carousel
