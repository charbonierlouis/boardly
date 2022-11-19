const ABORT_BUILD_CODE = 0;
const CONTINUE_BUILD_CODE = 1;
const BRANCH_NAME = process.env.VERCEL_GIT_COMMIT_REF;
const PROVIDER = process.env.VERCEL_GIT_PROVIDER;

const continueBuild = () => {
  console.log('✅ Build will continue');
  return process.exit(CONTINUE_BUILD_CODE);
};
const abortBuild = () => {
  console.log('🚫 Build will be aborted');
  process.exit(ABORT_BUILD_CODE);
};

const stepCheck = () => {
  if (PROVIDER === 'github') {
    if (BRANCH_NAME === 'main') {
      abortBuild();
    } else {
      continueBuild();
    }
  } else {
    continueBuild();
  }
}

stepCheck();
