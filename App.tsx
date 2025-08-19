/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AutoHeightWebView from '@brown-bear/react-native-autoheight-webview';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top,
          paddingBottom: safeAreaInsets.bottom,
          paddingLeft: safeAreaInsets.left,
          paddingRight: safeAreaInsets.right,
        },
      ]}
    >
      <ScrollView>
        <Text style={styles.title}>Website Preview</Text>
        <AutoHeightWebView
          scalesPageToFit={true}
          viewportContent={'width=device-width, user-scalable=no'}
          source={{
            uri: 'https://github.com/giannistolou/react-native-autoheight-webview/tree/master',
          }}
        />
        <Text style={styles.title}>Static html preview</Text>
        <AutoHeightWebView
          style={styles.webView}
          scalesPageToFit={true}
          viewportContent={'width=device-width, user-scalable=no'}
          source={{
            html: htmlContent,
          }}
        />
        <Text style={styles.title}>Custom style css</Text>
        <AutoHeightWebView
          style={styles.webView}
          customStyle={`
          * {
            font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #333;
          }
          body{
          background-color:red;
          }
          p {
          background-color: green;
          }
          p:nth-child(2) {
          font-weight: bold;
          }
           p:nth-child(3) {
          color: yellow;
          }
        `}
          scalesPageToFit={true}
          viewportContent={'width=device-width, user-scalable=no'}
          source={{
            html: htmlContent,
          }}
        />
        <Text style={styles.title}>Custom style javascript</Text>
        <AutoHeightWebView
          style={styles.webView}
          customScript={`document.body.style.backgroundColor = 'yellow';`}
          scalesPageToFit={true}
          viewportContent={'width=device-width, user-scalable=no'}
          source={{
            html: htmlContent,
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 16,
    color: '#22223b',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});

const htmlContent = `<p>
Tincidunt id eu rutrum dui platea nec velit urna nunc. Sapien nibh habitant a cras suscipit ipsum curae; quam. Cras libero vestibulum aptent venenatis congue per varius nulla, accumsan mus velit orci. Rhoncus consectetur est eu pulvinar. Felis diam vulputate ad pharetra ullamcorper primis torquent. Molestie platea venenatis cursus justo potenti aliquam montes viverra blandit class. Enim tempor nisi in ultrices nibh. Viverra.
</p>
<p>
Nostra nisl eros dui platea nisi vulputate. Quis fusce commodo pretium magnis habitasse duis at nam fermentum dui. Pellentesque morbi magnis nullam quisque cursus tortor pretium duis mauris dignissim nisl. Tincidunt ornare lacinia tortor arcu nulla? Tristique libero eros fusce sapien fringilla. Ac sem malesuada dis vitae nisl; justo maecenas mauris. Pulvinar mollis diam venenatis condimentum sapien imperdiet ante? Neque, viverra praesent curae;! Diam himenaeos nullam nunc blandit gravida fusce ante blandit. Habitant vehicula parturient, et hendrerit nam. Maecenas odio pretium sociis commodo pharetra sem egestas eget erat. Sociis, montes torquent nam torquent ad. Eros proin vulputate mauris sed auctor vestibulum nulla interdum vel, magna placerat sem! At curae; potenti blandit, sodales ipsum.
</p>
<p>
Volutpat facilisi ut maecenas vivamus scelerisque euismod primis egestas ac donec tempus volutpat. Id pretium senectus metus donec tellus praesent tellus. Imperdiet sapien bibendum laoreet facilisis nisl accumsan viverra sapien feugiat lacinia class. Sed massa turpis eget condimentum in montes! Amet felis congue sagittis praesent ut luctus facilisis curae; maecenas venenatis lacinia? Sollicitudin libero porttitor vitae malesuada mattis magna, montes hac ullamcorper varius felis leo. Penatibus eros molestie conubia netus nec eget suspendisse nibh torquent mi. Rhoncus suscipit suspendisse cursus habitant donec sagittis augue! A varius curae; tortor sodales. Lobortis arcu natoque aliquet mauris posuere etiam volutpat duis pharetra cras enim eu.
</p>
<p>
Hendrerit nulla, odio nec tempor nisi nisi in tellus magnis elementum. Eget eu risus mus. Feugiat penatibus praesent tortor luctus. Semper bibendum aptent inceptos etiam eros. Risus duis a nisl commodo. Mollis in sem, in malesuada ut enim elementum? Justo condimentum porta in. Libero ad felis faucibus nisi integer vitae felis pretium.
</p>
<p>
Eleifend amet mus conubia luctus? Elementum auctor aliquet fames montes tristique! Purus curabitur magna risus id velit quam scelerisque odio platea eu. Ac tortor rutrum pellentesque fermentum cubilia quis platea aliquam massa consequat venenatis imperdiet. Commodo elit rutrum, porttitor convallis non. Venenatis fames eros aliquam in. Ad massa penatibus cursus consequat suspendisse id tortor torquent lorem feugiat! Mollis imperdiet diam velit ac imperdiet magnis, aenean in. Iaculis nostra consequat venenatis rhoncus egestas eleifend egestas cursus? Pretium sollicitudin senectus fermentum habitant odio. Pulvinar sodales quisque ut. Rhoncus, nisi mollis etiam malesuada. Potenti natoque conubia facilisis nunc nostra. Risus quam tellus netus. Nostra sociis eleifend tellus. Nec malesuada nec ligula cras ultrices posuere. Risus hac primis imperdiet lacus erat cras ornare tempor ac viverra enim! Lectus pharetra maecenas aenean. Integer convallis habitant enim, tellus viverra aliquet.
</p>
<p>
Erat cursus, feugiat dictumst vehicula congue! Eu nisi phasellus sagittis. Senectus leo cras vestibulum. Vivamus fusce viverra sociis mus potenti! Aliquam ad erat dis commodo nisi viverra nostra. Commodo cras tristique eros class cras venenatis mauris nulla? Convallis ut posuere porta amet tristique auctor convallis placerat. Etiam suscipit libero eros morbi condimentum.
</p>
<p>
Velit dapibus penatibus etiam massa purus pellentesque sociosqu sagittis metus mattis laoreet facilisi! Taciti egestas a lectus pharetra per donec ultricies mauris facilisi in. Aliquam magna dignissim luctus. Accumsan magna dictumst lacinia, felis rhoncus aptent tempus consectetur elit aenean augue arcu! Ultricies id nisl nulla eget aliquam tincidunt elementum cum! Orci dolor etiam, interdum condimentum lacinia parturient! Sociosqu auctor ultrices adipiscing lorem adipiscing taciti. Hac potenti justo ante mollis rhoncus justo enim ante pharetra! Senectus malesuada convallis est cubilia fusce? Lobortis malesuada est neque lorem mi cubilia ipsum purus potenti mollis taciti nullam. Torquent, tincidunt fames laoreet dapibus phasellus mi elit! Sollicitudin nec imperdiet eget sodales volutpat fringilla. Aptent ante aliquam interdum eget. Neque ante.
</p>
<p>
Aliquam curae; felis pellentesque imperdiet fames, ad proin quisque lectus montes adipiscing. Felis et bibendum leo porttitor non scelerisque ut pulvinar rhoncus luctus eros. Sagittis dolor pellentesque nisl id id sed senectus congue felis nam velit. Convallis laoreet cum praesent interdum turpis. Malesuada parturient dis hac, consectetur netus nascetur dis! Integer condimentum sit dui nisl tellus ante mauris iaculis. Mi phasellus penatibus curabitur fusce condimentum sodales ac lobortis et est inceptos quam. Felis litora tincidunt pretium sociosqu cubilia, ante litora quis ridiculus. Fermentum facilisis est habitant. Mauris vel orci suspendisse. Hac odio platea eget placerat cum venenatis vivamus mattis congue himenaeos!
</p>
<p>
Ultricies quisque vitae consectetur nunc parturient dis. Dictum nisl nam aenean diam vestibulum. Sapien aptent non leo? Amet nisl turpis quis volutpat pellentesque per dignissim dis, et maecenas vivamus pulvinar. Ad gravida amet metus quam tortor habitant malesuada laoreet, facilisi lorem! Lectus adipiscing curae; dignissim a dictumst conubia proin ut lorem at. Rhoncus rhoncus potenti integer pulvinar. Metus vehicula rhoncus ultrices commodo phasellus sed himenaeos. Ligula ac nibh scelerisque quisque risus. Faucibus dignissim natoque integer hac eleifend. Sodales consectetur vulputate ipsum nisl maecenas nullam congue commodo magna ipsum massa.
</p>
<p>
Aenean dui eros odio mauris fermentum tincidunt primis viverra! Dui quisque justo ornare, sagittis primis luctus tincidunt! Consectetur platea facilisi luctus inceptos nam taciti praesent himenaeos neque diam. Quam ipsum tristique lobortis pharetra tempor aliquam suscipit? Habitant duis porttitor lectus. Lacus ridiculus posuere inceptos placerat sit. Neque hendrerit imperdiet a ullamcorper eros maecenas aptent hac lacus. Id montes mi odio integer faucibus interdum duis. Iaculis pellentesque sem aliquam risus auctor tincidunt sollicitudin? Ligula pretium donec libero nibh. Vulputate natoque nisi velit? Litora dui ridiculus, vestibulum mollis habitant tellus quisque suscipit conubia. Hac sapien justo diam, turpis habitant maecenas congue mollis suspendisse phasellus. Risus taciti eget placerat. Ut varius elit aliquet curabitur rutrum, taciti risus pharetra at posuere vestibulum accumsan? Elit suscipit congue!
</p>
`;
export default App;
