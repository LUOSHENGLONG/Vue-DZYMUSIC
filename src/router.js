import VueRouter from 'vue-router'

import App from './App.vue'
import SynthesizerContainer from './components/synthesizer/SynthesizerContainer.vue'
import EffectsContainer from './components/effects/EffectsContainer.vue'
import SamplePackContainer from './components/samplepack/SamplePackContainer.vue'
import HostContainer from './components/host/HostContainer.vue'
import TutorialContainer from './components/tutorial/TutorialContainer.vue'
import ProjectContainer from './components/project/ProjectContainer.vue'
import KontaktContainer from './components/kontakt/KontaktContainer.vue'
import MIDIContainer from './components/midi/MIDIContainer.vue'
import PresetContainer from './components/preset/PresetContainer.vue'
import AboutMeContainer from './components/aboutMe/AboutMeContainer.vue'
import ProjectIndexContainer from './components/project/ProjectIndexContainer.vue'
import KontaktIndexContainer from './components/kontakt/KontaktIndexContainer.vue'
import MIDIIndexContainer from './components/midi/MIDIIndexContainer.vue'
import PresetIndexContainer from './components/preset/PresetIndexContainer.vue'
import SynthesizerIndexContainer from './components/synthesizer/SynthesizerIndexContainer.vue'
import EffectsIndexContainer from './components/effects/EffectsIndexContainer.vue'
import SamplePackIndexContainer from './components/samplepack/SamplePackIndexContainer.vue'
import HostIndexContainer from './components/host/HostIndexContainer.vue'
import TutorialIndexContainer from './components/tutorial/TutorialIndexContainer.vue'
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
import PreviewContainer from './components/contribute/PreviewContainer.vue'
import UploadImagesContainer from './components/uploadImages/UploadImagesContainer.vue'
import HelpContainer from './components/help/HelpContainer.vue'
import SponsorContainer from './components/sponsor/SponsorContainer.vue'
import AccountSecurityContainer from './components/accountSecurity/AccountSecurityContainer.vue'
import FindPasswordContainer from './components/findPassword/FindPasswordContainer.vue'
import CopyrightContainer from './components/copyright/CopyrightContainer.vue'
import FeedbackContainer from './components/feedback/FeedbackContainer.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path: '/', component: HomeContainer},
    {path: '/synthesizer', component: SynthesizerContainer},
    {path: '/effects', component: EffectsContainer},
    {path: '/samplePack', component: SamplePackContainer},
    {path: '/host', component: HostContainer},
    {path: '/tutorial', component: TutorialContainer},
    {path: '/project', component: ProjectContainer},
    {path: '/preset', component: PresetContainer},
    {path: '/midi', component: MIDIContainer},
    {path: '/kontakt', component: KontaktContainer},
    {path: '/projectindex', component: ProjectIndexContainer},
    {path: '/presetindex', component: PresetIndexContainer},
    {path: '/midiindex', component: MIDIIndexContainer},
    {path: '/kontaktindex', component: KontaktIndexContainer},
    {path: '/synthindex', component: SynthesizerIndexContainer},
    {path: '/effecstindex', component: EffectsIndexContainer},
    {path: '/sampleindex', component: SamplePackIndexContainer},
    {path: '/hostindex', component: HostIndexContainer},
    {path: '/tutorialindex', component: TutorialIndexContainer},
    {path: '/user/:active', component: UserContainer},
    {path: '/setting/:active', component: SettingContainer},
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
    {path: '/help', component: HelpContainer},
    {path: '/sponsor', component: SponsorContainer},
    {path: '/accountSecurity', component: AccountSecurityContainer},
    {path: '/findPassword', component: FindPasswordContainer},
    {path: '/aboutMe', component: AboutMeContainer},
    {path: '/copyright', component: CopyrightContainer},
    {path: '/preview', component: PreviewContainer, name:"preview"},
    {path: '/feedback', component: FeedbackContainer, name:"feedback"},

  ]
})

// 把路由对象暴露出去
export default router