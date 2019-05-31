<template>
    <Page>
    <ActionBar>
        <GridLayout width="100%" columns="auto, *">
            <Label class="fas icon" :text="'fa-bars' | fonticon" @tap="openDrawer()" col="0" />
            <Label class="title" text="Demo Validation Form!" col="1" />
        </GridLayout>
    </ActionBar>

    <StackLayout>
      <RadDataForm
        ref="dataform"
        :source="person"
        :metadata="personMetadata">
      </RadDataForm>
      <Label :text="text"
             textWrap="true"
             margin="12"
             android:color="#C73339"
             ios:color="red"
             horizontalAlignment="center"></Label>
      <Button
        text="Login"
        margin="12"
        horizontalAlignment="stretch"
        @tap="onTap()"></Button>
    </StackLayout>
  </Page>
</template>

<script>
export default {
    name: 'Validation',
    data () {
    return {
      person: {
          password2: '',
          age: 0,
          agreeTerms: false
      },
      personMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'OnLostFocus',
        'propertyAnnotations':
        [
          {
            'name': 'username',
            'displayName': 'Nick',
            'index': 0,
            'validators': [
              { 'name': 'NonEmpty' },
              { 'name': 'MaximumLength', 'params': { 'length': 10 } }
            ]
          },
          {
            'name': 'email',
            'displayName': 'E-Mail',
            'index': 1,
            'editor': 'Email',
            'validators': [{
              'name': 'RegEx',
              'params': {
                'regEx': '^[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@gmail.com',
                'errorMessage': 'Please provide your @gmail.com email.'
              }
            }]
          },
          {
            'name': 'password',
            'displayName': 'Password',
            'editor': 'Password',
            'index': 2,
            'validators': [
              {
                'name': 'NonEmpty',
              },
              {
                'name': 'MinimumLength',
                'params': {
                  'length': 6
                }
              },
            ]
          },
          {
            'name': 'password2',
            'displayName': 'Repeat Password',
            'editor': 'Password',
            'index': 3,
            'validators': [
              {
                'name': 'NonEmpty',
              },
              {
                'name': 'MinimumLength',
                'params': {
                  'length': 6
                }
              },
            ]
          },
          {
            'name': 'age',
            'displayName': 'Age',
            'index': 4,
            'validators': [
              {
                'name': 'RangeValidator',
                'params': {
                  'minimum': 1,
                  'maximum': 100,
                  'errorMessage': 'Age must be between 1-100.',
                }
              },
            ],
          },
          {
            'name': 'agreeTerms',
            'displayName': 'Agree Terms',
            'index': 5,
            'validators': [
              {
                'name': 'IsTrueValidator',
              },
            ],
          }
        ]
      }
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onTap() {
      let isValid = true;

      const pName = this.$refs.dataform.getPropertyByName('username');
      const pPwd = this.$refs.dataform.getPropertyByName('password');
      const pPwd2 = this.$refs.dataform.getPropertyByName('password2');

      if (pName.valueCandidate.toLowerCase() !== 'admin1') {
        pName.errorMessage = 'Use admin1 as username.';
        this.$refs.dataform.notifyValidated('username', false);
        isValid = false;
      } else {
        this.$refs.dataform.notifyValidated('username', true);
      }

      if (!pPwd.valueCandidate) {
        pPwd.errorMessage = 'Password is empty.';
        this.$refs.dataform.notifyValidated('password', false);
        isValid = false;
      }

      if (pPwd2.valueCandidate !== pPwd.valueCandidate) {
        pPwd2.errorMessage = 'Password is not the same as above.';
        this.$refs.dataform.notifyValidated('password2', false);
        isValid = false;
      } else {
        this.$refs.dataform.notifyValidated('password2', true);
      }

      this._text = null;

      if (!isValid) {
        this._text = 'Username or Password is not valid.';
      } else {
        this._text = '';
        this.$refs.dataform.commitAll();

        alert({
          title: 'Successful Login',
          message: `Welcome, ${this.person.username}`,
          okButtonText: 'OK',
        });
      }
    }
  }
}
</script>
