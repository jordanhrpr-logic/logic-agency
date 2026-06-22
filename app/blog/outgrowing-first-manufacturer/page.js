import { buildCaseStudyPostMetadata, CaseStudyDerivedPostPage } from '@/lib/caseStudyDerivedPosts';

const slug = 'outgrowing-first-manufacturer';

export const metadata = buildCaseStudyPostMetadata(slug);

export default function Page() {
  return <CaseStudyDerivedPostPage slug={slug} />;
}
