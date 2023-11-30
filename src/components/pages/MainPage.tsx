import { Image, Text, View } from '@/components/atoms';
import CategoryItem from '@/components/organisms/CategoryItem';
import { color } from '@/constants';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const MainPage = () => {
  const categories = [
    {
      id: 1,
      category: '별',
    },
    {
      id: 2,
      category: '구구루루',
    },
    {
      id: 3,
      category: '박효신',
    },
    {
      id: 4,
      category: '플랫타업비트',
    },
    {
      id: 5,
      category: '쿠쿠다스',
    },
  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
        <View flex={1}>
          <View height={160} paddingHorizontal={20} justifyContent="flex-end">
            <Text fontSize={28} fontFamily="bold" lineHeight={40}>
              관심사를{'\n'}선택해주세요.
            </Text>
          </View>
          <View
            width="100%"
            height={40}
            marginTop={40}
            paddingHorizontal={20}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            gap={12}
          >
            <TouchableOpacity>
              <View flexDirection="row" alignItems="center" gap={12}>
                <Text fontSize={16}>조회순</Text>
                <Image src="back" width={20} height={20} transform={[{ rotate: '270deg' }]} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View flexDirection="row" alignItems="center" gap={12}>
                <Image src="addBlack" width={28} height={28} />
              </View>
            </TouchableOpacity>
          </View>
          <View flex={1}>
            <View zIndex={1} flex={1}>
              <FlatList
                data={categories}
                renderItem={CategoryItem}
                contentContainerStyle={{ margin: 20 }}
                ItemSeparatorComponent={() => <View marginVertical={6} />}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MainPage;
