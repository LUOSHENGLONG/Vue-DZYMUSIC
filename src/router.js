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



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path: '/', component: HomeContainer},
    {path: '/synth', component: SynthesizerContainer},
    {path: '/effects', component: EffectsContainer},
    {path: '/sample', component: SamplePackContainer},
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
    {path: '/info:id', component: InfoContainer},

  ]
})

// 把路由对象暴露出去
export default router