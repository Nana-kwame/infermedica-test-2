
const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">iDoc Diagnostic Portal.</h5>
      <div class="card-text">
        <p>Welcome to the iDoc symptom checker &mdash; a series of questionnaries are going to be generated that mimics a doctor's interview and gives you a preliminary diagnosis basing on a mathematical model.</p>
        <p>Please click <span class="badge badge-primary">Start diagnostics</span> to move to the first question.</p>
        <p class="text-muted small"><i class="fa fa-info-circle"></i> Please note that this is not a substitue for a medical professional but to aid the professional in making a logical diagnosis.</p>
      </div>
    `);
  });
};

export default template;
