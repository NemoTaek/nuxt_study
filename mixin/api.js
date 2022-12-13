export default {
  methods: {
    sendGet (relativeUri, requestData, successFunction = null, failureFunction = null) {
      this.$axios.$get(relativeUri, {params: requestData})
      .then(response => {
        if(successFunction) {
          successFunction(response);
        }
      })
      .catch(error => {
        if(failureFunction) {
          failureFunction(error);
        } else {
          alert(error)
        }
      })
    },
    sendDelete (relativeUri, successFunction = null, failureFunction = null) {
      this.$axios.$delete(relativeUri)
      .then(response => {
        if(successFunction) {
          successFunction(response);
        }
      })
      .catch(error => {
        if(failureFunction) {
          failureFunction(error);
        } else {
          alert(error)
        }
      })
    }
  },
};
