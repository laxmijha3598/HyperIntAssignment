import './App.css'
import AssignmentNote from './components/AssignmentNote'
import CommentRail from './components/CommentRail'
import CounterStrip from './components/CounterStrip'
import HeroSection from './components/HeroSection'
import MediaMomentum from './components/MediaMomentum'
import SocialProofGrid from './components/SocialProofGrid'
import {
  counterItems,
  featuredReviews,
  mediaMoments,
  productInfo,
  timelineComments,
  trustPills,
} from './data/productData'

function App() {
  return (
    <main className="page">
      <HeroSection productInfo={productInfo} trustPills={trustPills} />
      <CounterStrip counterItems={counterItems} />
      <SocialProofGrid featuredReviews={featuredReviews} />
      <MediaMomentum mediaMoments={mediaMoments} />
      <CommentRail timelineComments={timelineComments} />
      <AssignmentNote />
    </main>
  )
}

export default App
