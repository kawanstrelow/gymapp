import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableHighlightProps, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableHighlightProps & {

}

export function ExerciseCard({...rest} : Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
                <Image 
                    source={{uri: 'https://i.ytimg.com/vi/NFAEgfUIMFY/maxresdefault.jpg'}}
                    alt='Imagem do exercício'
                    w={16}
                    h={16}
                    rounded={'md'}
                    mr={4}
                    resizeMode='cover'
                />
                <VStack flex={1}>
                    <Heading fontSize='lg' color='white'>Remana Unilateral</Heading>
                    <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>3 séries x 12 repetições</Text>
                </VStack>
                
                <Icon 
                    as={Entypo} 
                    name='chevron-thin-right' 
                    color='gray.300'
                />

            </HStack>
            
        </TouchableOpacity>
    )
}