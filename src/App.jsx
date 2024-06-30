import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';
import artcle from './data/article.json';
import statistics  from './data/stats.json'

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          name={artcle.name}
          postedAt={artcle.postedAt}
          poster={artcle.poster}
          tag={artcle.tag}
          title={artcle.title}
          description={artcle.description}
          avatar={artcle.avatar}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={statistics} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
