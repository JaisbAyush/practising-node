pipeline{
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("install npm"){
            steps{
                sh 'sudo apt install npm'
            }
        }

        stage("build image"){
            steps{
                sh 'docker build -t first-node-project .'
            }
        }


    }
}