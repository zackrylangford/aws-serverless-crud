import json
import os
import boto3

client = boto3.client('dynamodb')

def deleteItemHandler(event, context):
    if event["httpMethod"] != "DELETE":
        raise Exception(f"deleteByIdHandler only accepts DELETE method, you tried: {event['httpMethod']}")

    id = event["pathParameters"]["id"]
    client.delete_item(TableName=os.environ["SAMPLE_TABLE"], Key={"id": {"S": id}})
    
    response = {
        "statusCode": 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json'
        },
        "body": json.dumps({"message": "Item deleted successfully"})
    }


    return response
