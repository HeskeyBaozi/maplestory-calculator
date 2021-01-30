import React from 'react';
import { getAllLocales, setLocale, getLocale, useIntl } from 'umi';
import { Dropdown, Menu, Radio, Space, Typography } from 'antd';
import { RouteContext } from '@ant-design/pro-layout';
import { TranslationOutlined } from '@ant-design/icons';

const localesMapper: Record<string, string> = {
  'zh-CN': '简体文案（CMS 冒险岛）',
  'zh-TW': '繁體文案（TMS 楓之谷）',
};

const options = getAllLocales().map((lang) => ({
  label: localesMapper[lang] ?? lang,
  value: lang,
}));

const CheckOutLanguage: React.FC = () => {
  const intl = useIntl();
  const menu = (
    <Menu
      selectable
      selectedKeys={[getLocale()]}
      onClick={(e) => {
        setLocale(e.key as string, false);
      }}
    >
      {options.map((option) => (
        <Menu.Item key={option.value}>{option.label}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <RouteContext.Consumer>
      {({ isMobile }) => {
        return isMobile ? (
          <Dropdown overlay={menu}>
            <Typography.Link>
              <Space>
                <TranslationOutlined />
                <span>{intl.formatMessage({ id: 'header.lang' })}</span>
              </Space>
            </Typography.Link>
          </Dropdown>
        ) : (
          <Radio.Group
            value={getLocale()}
            options={options}
            optionType="button"
            onChange={(e) => {
              setLocale(e.target.value, false);
            }}
          />
        );
      }}
    </RouteContext.Consumer>
  );
};

export default CheckOutLanguage;
