IonModal = React.createClass({
  render() {
    return (
      <div className="modal-backdrop active">
        <div className="modal-wrapper">
          <div className="modal">
            <div className="bar bar-light bar-header">
              <div className="content overflow-scroll">
                <div className="padding">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
})


// body needs class "modal-open" to     pointer-events: none;
