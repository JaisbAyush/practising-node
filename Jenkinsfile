pipeline{
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("build image"){
            steps{
                sh 'docker build -t first-node-project .'
            }
        }


    }
}