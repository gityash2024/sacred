/**
 * Routes Configuration
 * Centralized routing setup with lazy loading and 404 handling
 */

import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { Loading } from '@/components/common/Loading'

// Lazy load pages for code splitting
const Home = lazy(() => import('@/pages/Home').then((module) => ({ default: module.Home })))
const PeopleForPlanet = lazy(() =>
  import('@/pages/PeopleForPlanet').then((module) => ({ default: module.PeopleForPlanet }))
)
const BusinessForPlanet = lazy(() =>
  import('@/pages/BusinessForPlanet').then((module) => ({ default: module.BusinessForPlanet }))
)
const About = lazy(() => import('@/pages/About').then((module) => ({ default: module.About })))
const MyEarthPoint = lazy(() =>
  import('@/pages/MyEarthPoint').then((module) => ({ default: module.MyEarthPoint }))
)
const JunkToJungles = lazy(() =>
  import('@/pages/JunkToJungles').then((module) => ({ default: module.JunkToJungles }))
)
const India = lazy(() => import('@/pages/India').then((module) => ({ default: module.India })))
const PartnershipForPlanet = lazy(() =>
  import('@/pages/PartnershipForPlanet').then((module) => ({ default: module.PartnershipForPlanet }))
)
const StoriesThatInspire = lazy(() =>
  import('@/pages/StoriesThatInspire').then((module) => ({ default: module.StoriesThatInspire }))
)
const BlogDetail = lazy(() =>
  import('@/pages/StoriesThatInspire').then((module) => ({ default: module.BlogDetail }))
)
const OurSacredGroves = lazy(() =>
  import('@/pages/OurSacredGroves').then((module) => ({ default: module.OurSacredGroves }))
)
const CoedRhyal = lazy(() =>
  import('@/pages/CoedRhyal').then((module) => ({ default: module.CoedRhyal }))
)
const GirginPrysg = lazy(() =>
  import('@/pages/GirginPrysg').then((module) => ({ default: module.GirginPrysg }))
)
const OceanSanctuary = lazy(() =>
  import('@/pages/OceanSanctuary').then((module) => ({ default: module.OceanSanctuary }))
)
const MediaCentre = lazy(() =>
  import('@/pages/MediaCentre').then((module) => ({ default: module.MediaCentre }))
)
const TermsAndConditions = lazy(() =>
  import('@/pages/TermsAndConditions').then((module) => ({ default: module.TermsAndConditions }))
)
const Policy = lazy(() =>
  import('@/pages/Policy').then((module) => ({ default: module.Policy }))
)
const KnowledgeBase = lazy(() =>
  import('@/pages/KnowledgeBase').then((module) => ({ default: module.KnowledgeBase }))
)
const KnowledgeBaseCategory = lazy(() =>
  import('@/pages/KnowledgeBase').then((module) => ({ default: module.KnowledgeBaseCategory }))
)
const KnowledgeBaseDetail = lazy(() =>
  import('@/pages/KnowledgeBase').then((module) => ({ default: module.KnowledgeBaseDetail }))
)
const NotFound = lazy(() =>
  import('@/pages/NotFound').then((module) => ({ default: module.NotFound }))
)

/**
 * Loading fallback component for Suspense
 */
const PageLoader = () => <Loading />

/**
 * Application routes configuration
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <NotFound />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'people-for-the-planet',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PeopleForPlanet />
          </Suspense>
        ),
      },
      {
        path: 'business-for-the-planet',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BusinessForPlanet />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'my-earth-point',
        element: (
          <Suspense fallback={<PageLoader />}>
            <MyEarthPoint />
          </Suspense>
        ),
      },
      {
        path: 'junk-to-jungles',
        element: (
          <Suspense fallback={<PageLoader />}>
            <JunkToJungles />
          </Suspense>
        ),
      },
      {
        path: 'india',
        element: (
          <Suspense fallback={<PageLoader />}>
            <India />
          </Suspense>
        ),
      },
      {
        path: 'partnership-for-the-planet',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PartnershipForPlanet />
          </Suspense>
        ),
      },
      {
        path: 'stories-that-inspire',
        element: (
          <Suspense fallback={<PageLoader />}>
            <StoriesThatInspire />
          </Suspense>
        ),
      },
      {
        path: 'stories-that-inspire/:id',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogDetail />
          </Suspense>
        ),
      },
      {
        path: 'our-sacred-groves',
        element: (
          <Suspense fallback={<PageLoader />}>
            <OurSacredGroves />
          </Suspense>
        ),
      },
      {
        path: 'coed-rhyal',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CoedRhyal />
          </Suspense>
        ),
      },
      {
        path: 'girgin-prysg',
        element: (
          <Suspense fallback={<PageLoader />}>
            <GirginPrysg />
          </Suspense>
        ),
      },
      {
        path: 'ocean-sanctuary',
        element: (
          <Suspense fallback={<PageLoader />}>
            <OceanSanctuary />
          </Suspense>
        ),
      },
      {
        path: 'media-centre',
        element: (
          <Suspense fallback={<PageLoader />}>
            <MediaCentre />
          </Suspense>
        ),
      },
      {
        path: 'terms-and-conditions',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TermsAndConditions />
          </Suspense>
        ),
      },
      {
        path: 'policy',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Policy />
          </Suspense>
        ),
      },
      {
        path: 'knowledgebase/docs',
        element: (
          <Suspense fallback={<PageLoader />}>
            <KnowledgeBase />
          </Suspense>
        ),
      },
      {
        path: 'knowledgebase/docs-category/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <KnowledgeBaseCategory />
          </Suspense>
        ),
      },
      {
        path: 'knowledgebase/docs/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <KnowledgeBaseDetail />
          </Suspense>
        ),
      },
      // Catch-all 404 route
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
])

/**
 * Routes component
 * @returns RouterProvider with configured routes
 */
export const Routes: React.FC = () => {
  return <RouterProvider router={router} />
}
