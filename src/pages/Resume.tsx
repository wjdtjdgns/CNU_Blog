import styled from '@emotion/styled';
import Tag from '../components/Tag';
const experiencesList = [
  {
    title: '학부연구생 - ANTS Lab',
    range: '2023.04 ~ ',
    content: '충남대학교 소프트웨어 분석 및 테스팅 연구실 ANTS Lab',
    tags: ['Software_Analysis', 'Testing'],
  },
  {
    title: 'CNU SW Academy 2기',
    range: '2023.01 ~ 2023.04',
    content: '충남대학교에서 시행한 Web/iOS 교육 프로그램. JavaScript, React 등 프론트엔드 코스 수강',
    tags: ['Frontend', 'JavaScript', 'React'],
  },
];

const awardsList = [
  {
    title: '2023 CNU SW 아카데미 프로젝트 경진대회 [장려상]',
    content: '2023 CNU SW Academy 프로젝트 경진대회 SimpleRPA 프로젝트 장려상 수상, Frontend 개발 담당',
    tags: ['CNU_SW_ACADEMY', 'Frontend'],
  },
  { title: '2022 CNU 창의SW/AI축전-DevDay [장려상]', content: '2022년 충남대학교 코딩테스트 장려상 수상', tags: ['Coding_Test'] },
];

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 1rem 2rem;
  overflow: hidden;
  transition: border 0.2s ease 0s;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  text-decoration: none;
`;

const Contents = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const TagWrapepr = styled.div`
  display: flex;
`;

const Resume = () => {
  return (
    <div>
      <h2>Experience</h2>
      {experiencesList.map((v, i) => (
        <Item key={i}>
          <h2>{v.title}</h2>
          <Contents>{v.range}</Contents>
          <Contents>{v.content}</Contents>
          <TagWrapepr>
            {v.tags.map((tag, idx) => (
              <Tag key={idx}>#{tag}</Tag>
            ))}
          </TagWrapepr>
        </Item>
      ))}

      <br />
      <br />

      <h2>Awards</h2>
      {awardsList.map((v, i) => (
        <Item key={i}>
          <h2>{v.title}</h2>
          <Contents>{v.content}</Contents>
          <TagWrapepr>
            {v.tags.map((tag, idx) => (
              <Tag key={idx}>#{tag}</Tag>
            ))}
          </TagWrapepr>
        </Item>
      ))}
    </div>
  );
};

export default Resume;
