pipeline {
	agent { node { label 'lisk-faucet' } }
	stages {
		stage('Install dependencies') {
			steps {
				sh 'npm install --verbose'
			}
		}
		stage('Run lint') {
			steps {
				ansiColor('xterm') {
					sh 'npm run lint'
				}
			}
		}
		stage('Deploy') {
			steps {
				error('No deployment process specified. Depending on your project you may prefer to remove this stage entirely.')
			}
		}
	}
	post {
		success {
			githubNotify context: 'continuous-integration/jenkins/lisk-faucet', description: 'The build passed.', status: 'SUCCESS'
		}
		failure {
			githubNotify context: 'continuous-integration/jenkins/lisk-faucet', description: 'The build failed.', status: 'FAILURE'
		}
		aborted {
			githubNotify context: 'continuous-integration/jenkins/lisk-faucet', description: 'The build was aborted.', status: 'ERROR'
		}
		always {
			archiveArtifacts allowEmptyArchive: true, artifacts: 'logs/*'
		}
	}
}
