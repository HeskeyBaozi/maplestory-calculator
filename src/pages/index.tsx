import styles from './index.less';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

export default function IndexPage() {
  return (
    <PageContainer>
      <div>
        <h1 className={styles.title}>Page index</h1>
        <Button type="primary">Hello</Button>
      </div>
    </PageContainer>
  );
}
