var Transition = React.addons.CSSTransitionGroup

AppBody = React.createClass({
  // Requires tabs and makes sure it's a string

  propTypes() {
    tabs: React.PropTypes.array.isRequired
  },
  getDefaultProps() {
    return {
      tabs: ["Tab 1", "Tab 2", "Tab 3"]
    }
  },

  getInitialState() {
    return {
      modal: false
    }
  },

  ionModal(tab) {
    this.setState({
      modal: (
        <IonModal>
          <div className="h1 title">{tab}</div>
          <button onClick={ () => this.setState({modal:false}) } className="button button-icon icon ion-close"></button>
        </IonModal>
      )
    })
  },

  render() {
    return (
      <div className="ionic-body">
        <div className="bar bar-header bar-light">
          <ReactRouter.Link className="button button-icon icon ion-gear-a" to={"/settings"}></ReactRouter.Link>
          <ReactRouter.Link className="h1 title" to={"/"}>App Name</ReactRouter.Link>
          <ReactRouter.Link className="button button-icon icon ion-heart" to={"/other"}></ReactRouter.Link>
        </div>

        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              <ReactRouter.RouteHandler />
            </div>
          </div>
        </div>

        <Transition transitionName='modal'>
          {this.state.modal}
        </Transition>

        <div className="tabs tabs-icon-top">
          {this.props.tabs.map((tab, i) => {
              return (
                <a className="tab-item" key={Random.hexString(24)} onClick={this.ionModal.bind(this, tab)}>
                  <i className="icon ion-alert"></i>
                  {tab}
                </a>
              )
            })
          }
        </div>



      </div>
    )
  }
});

// 'click [data-ion-modal]': function (event, template) {
//   var templateName = $(event.currentTarget).data('ion-modal');
//   IonModal.open(templateName, $(event.currentTarget).data());
// },
