import React from 'react';
import ProForm, { ProFormDigit, ProFormText } from '@ant-design/pro-form';
import { useIntl } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

const ProfileForm: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Card>
        <ProForm>
          <ProFormText
            name="characterName"
            label={intl.formatMessage({
              id: 'profile.form.basic.character-name',
            })}
            width="md"
            rules={[{ required: true }]}
          />
          <ProFormDigit
            name="level"
            min={1}
            max={275}
            label={intl.formatMessage({ id: 'profile.form.basic.level' })}
            rules={[{ required: true }]}
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default ProfileForm;
