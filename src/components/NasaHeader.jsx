import React from 'react';
import PropTypes from 'prop-types';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { Header } from './Header';

export const NasaHeader = ({
  languageData,
  localeName,
}) => {
  if (languageData) {
    return (
      <IntlProvider
        locale={localeName}
        messages={languageData}
      >
        <Header />
      </IntlProvider>
    );
  }
  return null;
};

NasaHeader.propTypes = {
  languageData: PropTypes.shape({}).isRequired,
  localeName: PropTypes.string.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export const mapDispatchToProps = (dispatch) => ({
  switchLanguage: async ({ target }) => {
    await dispatch(updateLocale(target.value));
    await dispatch(loadLanguagePack('nasa-header', { fallbackLocale: 'en-US' }));
  },
});

export const mapStateToProps = (state) => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(
    ['intl', 'languagePacks', localeName, 'nasa-header'],
    fromJS({})
  ).toJS();

  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName,
  };
};

export const loadModuleData = ({ store: { dispatch } }) => dispatch(loadLanguagePack('nasa-header', { fallbackLocale: 'en-US' }));

NasaHeader.holocron = {
  name: 'nasa-header',
  loadModuleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(NasaHeader);
