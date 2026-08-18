import { useRef } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

import Carousel from "react-native-reanimated-carousel";

import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
    const ref = useRef<any>(null);
    const width = useWindowDimensions().width;

    return (
        <View className="h-[250px] w-full">
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }: { item: Movie }) => (
                    <MoviePoster id={item.id} poster={item.poster} />
                )}
                // provide explicit width/height for horizontal carousel
                width={width}
                height={350}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                defaultIndex={1}
            />
        </View>
    );
};
export default MainSlideshow;