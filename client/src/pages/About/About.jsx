import React from 'react'
import {
  Container,
  Box,
  TextBox,
  Title,
  Text,
  Image,
} from './AboutStyle'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'
import { dataSlider } from '../../data/Data'

import {
  aboutTextAnimation,
  aboutImgAnimation
} from '../../resources/Animations'

export default function About() {

  return (
    <>
      <Container>
        <Box style={{ marginTop: '10px' }}>
          <TextBox
            variants={aboutTextAnimation}
            initial='initial'
            animate='animate'
          >
            <Title>De que se trata</Title>
            <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.
            </Text>
          </TextBox>
          <Image src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg'
            variants={aboutImgAnimation}
            initial='initial'
            animate='animate'
          />
        </Box>
        <Box>
          <Image src='https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            variants={aboutImgAnimation}
            initial='initial'
            animate='animate'
          />
          <TextBox
            variants={aboutTextAnimation}
            initial='initial'
            animate='animate'
          >
            <Title>A mas detalle</Title>
            <Text>
            ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </Text>
          </TextBox>
        </Box>
      </Container>
      <Slider slides={dataSlider} />
      <Footer />
    </>
  )
}
