import VueRouter from 'vue-router'

import App from './App.vue'
import SynthesizerContainer from './components/synthesizer/SynthesizerContainer.vue'
import EffectsContainer from './components/effects/EffectsContainer.vue'
import SamplePackContainer from './components/samplepack/SamplePackContainer.vue'
import HostContainer from './components/host/HostContainer.vue'
import TutorialContainer from './components/tutorial/TutorialContainer.vue'
import SynthesizerIndexContainer from './components/synthesizer/SynthesizerIndexContainer.vue'
import EffectsIndexContainer from './components/effects/EffectsIndexContainer.vue'
import SamplePackIndexContainer from './components/samplepack/SamplePackIndexContainer.vue'
import HostIndexContainer from './components/host/HostIndexContainer.vue'
import HomeContainer from './components/home/HomeContainer.vue'
import UserContainer from './components/user/UserContainer.vue'
import SettingContainer from './components/setting/SettingContainer.vue'
import LoginContainer from './components/login/LoginContainer.vue'
import EachContainer from './components/sub/EachContainer.vue'
import InfoContainer from './components/sub/InfoContainer.vue'
import RightContainer from './components/sub/RightContainer.vue'
import Info2Container from './components/sub/InfoContainer2.vue'
import SearchContainer from './components/search/SearchContainer.vue'
import Search2Container from './components/search/Search2Container.vue'
import CommentContainer from './components/comment/CommentContainer.vue'
import LastContainer from './components/last/LastContainer.vue'
import ContributeContainer from './components/contribute/ContributeContainer.vue'
import SuccessContribute from './components/contribute/SuccessContribute.vue'
import FailContribute from './components/contribute/FailContribute.vue'
import TipsContainer from './components/contribute/TipsContainer.vue'
import UploadImagesContainer from './components/uploadImages/UploadImagesContainer.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path: '/', component: HomeContainer},
    {path: '/synthesizer', component: SynthesizerContainer},
    {path: '/effects', component: EffectsContainer},
    {path: '/samplePack', component: SamplePackContainer},
    {path: '/host', component: HostContainer},
    {path: '/tutorial', component: TutorialContainer},
    {path: '/synthindex', component: SynthesizerIndexContainer},
    {path: '/effecstindex', component: EffectsIndexContainer},
    {path: '/sampleindex', component: SamplePackIndexContainer},
    {path: '/hostindex', component: HostIndexContainer},
    {path: '/user', component: UserContainer},
    {path: '/setting', component: SettingContainer},
    {path: '/login', component: LoginContainer},
    {path: '/each', component: EachContainer},
    {path: '/uploadImages', component: UploadImagesContainer},
    {path: '/last', component: LastContainer},
    {path: '/contribute', component: ContributeContainer},
    {path: '/success', component: SuccessContribute},
    {path: '/fail', component: FailContribute},
    {path: '/tips', component: TipsContainer},
    {path: '/search/:keyword', component: SearchContainer, name:"search"},
    {path: '/search/:keyword', component: Search2Container, name:"search2"},
    {path: '/:type/info/:id', component: InfoContainer, name:"info"},
    {path: '/:type/info/:id', component: Info2Container, name:"info2"},

  ]
})

// 把路由对象暴露出去
export default router