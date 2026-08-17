import { View, Text, Dimensions, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface';
import Carousel from 'react-native-reanimated-carousel';

interface Props {
    movies: Movie[];
}


const MainSlideShow = ({ movies }: Props) => {

    const ref = useRef<React.ElementRef<typeof Carousel> | null>(null);
    const width = useWindowDimensions().width;

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }: { item: Movie }) => <Text>{item.title}</Text>}
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollinScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={1}
            />

        </View>
    )
}

export default MainSlideShow